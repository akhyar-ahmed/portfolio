// Define the PDF URLs
const pdfPaths = [
    'resources/pdfs/project_1.pdf',
    'resources/pdfs/project_2.pdf',
    'resources/pdfs/project_3.pdf'
    ];

    // Function to open the PDF in an iframe
    function openPdfInIframe(pdfUrl) {
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.width = '70%';
    iframe.height = '80%';

    // Create a modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modalOverlay.style.display = 'flex';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.appendChild(iframe);

    // Append the overlay to the body
    document.body.appendChild(modalOverlay);

    // Close the modal on click outside the iframe
    modalOverlay.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });
    }

    document.addEventListener('DOMContentLoaded', function () {
    // Attach the function to the buttons
    pdfPaths.forEach((pdfPath, index) => {
        const buttonId = `openPdfButton${index + 1}`;
        const openPdfButton = document.getElementById(buttonId);
        if (openPdfButton) {
        openPdfButton.addEventListener('click', () => openPdfInIframe(pdfPath));
        } else {
        console.error(`Button with id ${buttonId} not found.`);
        }
    });
    });