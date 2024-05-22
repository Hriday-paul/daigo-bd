

const UploadFile = (file: File) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
    const unsignedUploadPreset = process.env.NEXT_PUBLIC_UNSIGNEDUPLOADPRESETnAME as any;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('file', file);
    return fetch(url, {
        method: 'POST',
        body: fd,
    })
};

export default UploadFile;