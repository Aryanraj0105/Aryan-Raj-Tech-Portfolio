import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0 overflow-hidden bg-background">
        <DialogHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">Resume</DialogTitle>
          <Button variant="outline" size="sm" asChild className="mr-6">
            <a href="/Aryan_Raj_Tech_Resume.pdf" download="Aryan_Raj_Tech_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </DialogHeader>
        <div className="flex-1 w-full bg-muted/20 relative">
          <iframe
            src="/Aryan_Raj_Tech_Resume.pdf#view=FitH"
            title="Resume Preview"
            className="w-full h-full border-none"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
