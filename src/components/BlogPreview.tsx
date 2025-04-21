
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Download, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { BlogFormData } from "./BlogForm";

interface BlogPreviewProps {
  blogContent: string;
  formData: BlogFormData;
}

const BlogPreview = ({ blogContent, formData }: BlogPreviewProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blogContent);
    toast.success("Blog content copied to clipboard!");
  };

  const downloadAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([blogContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Blog downloaded as TXT file!");
  };

  const showFeedbackToast = (positive: boolean) => {
    if (positive) {
      toast.success("Thanks for your feedback! We'll improve our generation based on your input.");
    } else {
      toast.success("Thanks for your feedback! We'll work on improving our content generation.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Generated Blog</h2>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={downloadAsTxt}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <Tabs defaultValue="preview" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="raw">Raw Text</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="min-h-[400px]">
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h1 className="text-2xl font-bold mb-4">{formData.title}</h1>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: blogContent.split('\n').map(para => `<p>${para}</p>`).join('') 
              }} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="raw" className="min-h-[400px]">
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="whitespace-pre-wrap text-sm font-mono">{blogContent}</pre>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 pt-4 border-t flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {formData.length} words | Tone: {formData.tone}
        </div>
        <div className="flex space-x-3 items-center">
          <span className="text-sm text-gray-500 mr-1">How was this content?</span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-green-500 hover:text-green-600 hover:bg-green-50"
            onClick={() => showFeedbackToast(true)}
          >
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={() => showFeedbackToast(false)}
          >
            <ThumbsDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
