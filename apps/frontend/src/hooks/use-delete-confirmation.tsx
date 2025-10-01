import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface UseDeleteConfirmationProps {
  deleteFn: (id: string) => Promise<any>;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useDeleteConfirmation({
  deleteFn,
  onSuccess,
  onError,
  successMessage = "Record deleted successfully",
  errorMessage = "Deletion failed",
}: UseDeleteConfirmationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const deleteMutation = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      toast.success(successMessage);
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(errorMessage);
      onError?.(error);
    },
  });

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId) {
      deleteMutation.mutate(selectedId);
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setSelectedId(null);
  };

  return {
    isOpen,
    setIsOpen,
    selectedId,
    isLoading: deleteMutation.isPending,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancel,
  };
}
