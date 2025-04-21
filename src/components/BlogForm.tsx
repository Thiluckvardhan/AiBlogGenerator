
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Loader2, Sparkles } from "lucide-react";

interface BlogFormProps {
  onGenerate: (blogData: BlogFormData) => void;
  isGenerating: boolean;
}

export interface BlogFormData {
  title: string;
  topic: string;
  tone: string;
  keywords: string;
  length: number;
}

const BlogForm = ({ onGenerate, isGenerating }: BlogFormProps) => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    topic: "",
    tone: "informative",
    keywords: "",
    length: 500,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tone: value }));
  };

  const handleLengthChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, length: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold mb-6">Blog Generator</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Blog Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter a title for your blog post"
            value={formData.title}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="topic">Topic/Subject</Label>
          <Textarea
            id="topic"
            name="topic"
            placeholder="What is your blog about? Provide a brief description"
            value={formData.topic}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="tone">Tone</Label>
          <Select 
            value={formData.tone} 
            onValueChange={handleToneChange}
          >
            <SelectTrigger id="tone" className="mt-1">
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="informative">Informative</SelectItem>
              <SelectItem value="casual">Casual & Conversational</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="humorous">Humorous</SelectItem>
              <SelectItem value="inspirational">Inspirational</SelectItem>
              <SelectItem value="technical">Technical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="keywords">Keywords (comma separated)</Label>
          <Input
            id="keywords"
            name="keywords"
            placeholder="Enter keywords to include in your blog"
            value={formData.keywords}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="length">Content Length</Label>
            <span className="text-sm text-gray-500">{formData.length} words</span>
          </div>
          <Slider
            id="length"
            min={300}
            max={1500}
            step={100}
            value={[formData.length]}
            onValueChange={handleLengthChange}
          />
        </div>
        
        <Button
          type="submit"
          className="w-full mt-4 bg-blog-primary hover:bg-blog-secondary"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Blog
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
