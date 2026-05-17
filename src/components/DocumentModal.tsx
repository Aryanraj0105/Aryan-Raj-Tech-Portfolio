import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  documentUrl: string;
  type: 'image' | 'pdf' | 'link';
}

const DocumentModal = ({ isOpen, onClose, title, documentUrl, type }: DocumentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0 overflow-hidden bg-background">
        <DialogHeader className="p-4 border-b border-border flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <div className="flex items-center gap-2 mr-6">
            {type !== 'link' && (
              <Button variant="outline" size="sm" asChild>
                <a href={documentUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            )}
            {type === 'link' && (
              <Button variant="default" size="sm" asChild>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Link
                </a>
              </Button>
            )}
          </div>
        </DialogHeader>
        <div className="flex-1 w-full bg-muted/20 relative flex items-center justify-center p-4">
          {type === 'image' && (
            <img src={documentUrl} alt={title} className="max-w-full max-h-full object-contain shadow-lg border border-border" />
          )}
          {type === 'pdf' && (
            <iframe
              src={`${documentUrl}#view=FitH`}
              title={title}
              className="w-full h-full border-none shadow-lg"
            />
          )}
          {type === 'link' && (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">This certification is hosted externally.</p>
              <Button asChild>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer">Verify Certification</a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentModal;
