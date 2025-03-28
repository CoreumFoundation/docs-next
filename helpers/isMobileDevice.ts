import { isBrowser } from '@/helpers/isBrowser';
import { useCallback, useEffect, useState } from 'react';

export const useSetMobileDevice = (
    isHorizontal = false,
    maxWidth = 768,
    maxHeight = 600
) => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    const isMobileResolution = useCallback(
        (definedWindow: Window) => {
            const width =
                definedWindow.innerWidth > definedWindow.outerWidth
                    ? definedWindow.outerWidth
                    : definedWindow.innerWidth;
            const height = definedWindow.innerHeight;

            if (isHorizontal) {
                const query = definedWindow.matchMedia(
                    `(max-height: ${maxHeight}px)`
                );
                return query.matches && height < maxHeight;
            }
            const query = definedWindow.matchMedia(
                `(max-width: ${maxWidth}px)`
            );
            return query.matches && width < maxWidth;
        },
        [isHorizontal, maxWidth, maxHeight]
    );

    useEffect(() => {
        if (isBrowser()) {
            const handleResize = () => {
                if (isMobileResolution(window)) {
                    setIsMobile(true);
                } else {
                    setIsMobile(false);
                }
            };
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => {
                window.removeEventListener('resize', handleResize);
                handleResize();
            };
        }
    }, [isBrowser(), isMobileResolution]);

    return isMobile;
};
