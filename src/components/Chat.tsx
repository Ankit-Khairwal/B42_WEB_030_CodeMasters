
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
{/*add */}
interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! How can we help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // Simulate response (you can replace this with actual backend integration)
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you soon.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <Card className="w-[350px] h-[450px] flex flex-col">
              <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
                <h3 className="font-semibold">Chat with us</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-primary-hover"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs opacity-70">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full w-12 h-12 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Chat;
