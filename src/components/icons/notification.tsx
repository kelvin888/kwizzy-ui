// SVGComponent.tsx
import React from 'react';

const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...restProps }) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...restProps}>
            <path d="M12.4167 22.9167C11.7258 22.914 11.0641 22.694 10.5744 22.3041C10.0847 21.9143 9.80632 21.386 9.79949 20.8334H15.0078C15.0106 21.1119 14.9442 21.3881 14.8125 21.6459C14.6441 21.955 14.3863 22.2276 14.0603 22.4413C13.7343 22.6551 13.3495 22.8037 12.9375 22.875H12.8763C12.725 22.9002 12.5712 22.9142 12.4167 22.9167ZM22.8334 19.7917H2V17.7084L4.60417 16.6667V10.9375C4.53557 9.46787 4.95044 8.00955 5.8073 6.70837C6.22896 6.11178 6.80395 5.59349 7.49434 5.18769C8.18473 4.7819 8.97483 4.49782 9.81251 4.35421V2.08337H15.0208V4.35421C18.3789 4.99379 20.2292 7.33129 20.2292 10.9375V16.6667L22.8334 17.7084V19.7917Z" fill="currentColor" />
        </svg>
    );
};

export default SVGComponent;
