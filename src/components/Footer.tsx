
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent mb-4">
              ContentForge
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Generate high-quality blog content with the power of AI. 
              Save time and focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blog-primary">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blog-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ContentForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
