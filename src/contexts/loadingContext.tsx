import LoadingModal from '@/components/LoadingModal';
import { createContext, useCallback, useState } from 'react'
import type { PropsWithChildren } from 'react';

type loadingContext = { appIsLoading: boolean, startLoading: () => void, stopLoading: () => void }
const LoadingContext = createContext<loadingContext | null>(null);

export function LoadingContextProvider({ children }: PropsWithChildren) {
    const [appIsLoading, setAppIsLoading] = useState(false);
    const startLoading = useCallback(() => {
        setAppIsLoading(true)
    }, [])
    const stopLoading = useCallback(() => {
        setAppIsLoading(false)
    }, [])

    return (
        <LoadingContext.Provider value={{ appIsLoading, startLoading, stopLoading }}>
            {children}
            <LoadingModal isOpen={appIsLoading} />
        </LoadingContext.Provider>
    )
}

export default LoadingContext;