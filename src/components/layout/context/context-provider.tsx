import useDialogState from '@/hooks/use-dialog-state';
import React, { useState } from 'react';

type DialogType = 'add';

interface ContextType {
    open: DialogType | null
    setOpen: (str: DialogType | null) => void
}

const MainContext = React.createContext<ContextType | null>(null)

interface Props {
    children: React.ReactNode;
}

export default function MainProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<DialogType>(null);

    return (
        <MainContext.Provider value={{ open, setOpen }}>
            {children}
        </MainContext.Provider>
    );
}
export const useMainContext = () => {
    const context = React.useContext(MainContext);
    if (!context) {
        throw new Error('Context must be used within a <Main Provider>');
    }   
    return context;
};