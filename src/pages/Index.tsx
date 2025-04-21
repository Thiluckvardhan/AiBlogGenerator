
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGenerator from "@/components/BlogGenerator";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Feather, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blog-primary to-blog-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Create Engaging Blog Content with AI
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Generate high-quality, SEO-optimized blog posts in seconds with our
              AI-powered content generator.
            </p>
            <Button size="lg" className="bg-white text-blog-primary hover:bg-gray-100">
              Try It Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Supercharge Your Content Creation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="bg-blog-accent p-4 rounded-full inline-flex mb-4">
                  <Zap className="h-6 w-6 text-blog-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate complete blog posts in seconds, saving you hours of writing time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="bg-blog-accent p-4 rounded-full inline-flex mb-4">
                  <BrainCircuit className="h-6 w-6 text-blog-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-600">
                  Utilizes advanced AI to create natural, engaging, and original content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="bg-blog-accent p-4 rounded-full inline-flex mb-4">
                  <Feather className="h-6 w-6 text-blog-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customizable</h3>
                <p className="text-gray-600">
                  Tailor the tone, style, and length to match your brand's unique voice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Generator Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Try Our AI Blog Generator
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Experience the power of AI content creation. Fill in the form below with your blog details and let our AI do the rest.
            </p>
            
            <BlogGenerator />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-blog-accent py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Join thousands of content creators who are already using ContentForge to streamline their content creation process.
            </p>
            <Button size="lg" className="bg-blog-primary hover:bg-blog-secondary text-white">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
