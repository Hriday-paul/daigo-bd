import { FaCloudArrowDown } from "react-icons/fa6";


const DownLoadFile = ({ url }: { url: string }) => {
    const parts = url.split('/');
    parts.splice(6, 0, 'fl_attachment')
    const result = parts.join('/');
    return (
        <>
            <a href={result} download>
                <button className="btn btn-info">
                    <FaCloudArrowDown className=" text-white" />
                    Download
                </button>
            </a>
        </>
    )
};

export default DownLoadFile;