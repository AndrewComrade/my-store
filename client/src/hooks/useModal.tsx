import React, { useCallback, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core';

export interface IModalOptions {
    title: string;
    contentText: string;
    submitBtnText: string;
    onCreate: () => void;
}

export const useModal = ({
    title,
    contentText,
    submitBtnText,
    onCreate,
}: IModalOptions) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const Modal = useCallback(
        () => (
            <Dialog open={isOpen}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{contentText}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={title}
                        fullWidth
                        value={value}
                        onChange={onInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onCreate} color="primary">
                        {submitBtnText}
                    </Button>
                </DialogActions>
            </Dialog>
        ),
        []
    );

    return { onOpen, onClose, isOpen, Modal };
};
