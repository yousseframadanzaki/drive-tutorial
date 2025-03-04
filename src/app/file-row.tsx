import type { Folder,File } from "~/lib/mock-data";
import { FileIcon, Folder as FolderIcon } from "lucide-react";
import type { files, folders } from "~/server/db/schema";

export function FileRow(props: {file: typeof files.$inferInsert}) {
    const {file} = props;
    return (
        <li key={file.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">

                    <a target="_blank" href={file.url} className="flex items-center text-gray-100 hover:text-blue-400">
                        <FileIcon className="mr-3" size={20} />
                        {file.name}
                    </a>

                </div>
                <div className="col-span-3 text-gray-400">File</div>
                <div className="col-span-3 text-gray-400">{file.size}</div>
            </div>
        </li>
    )
}

export function FolderRow(props: { folder: typeof folders.$inferSelect; handleFolderClick: () => void }) {
    const { folder, handleFolderClick } = props;
    return (
        <li key={folder.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6 flex items-center">

                    <button
                        onClick={() => handleFolderClick()}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                    >
                        <FolderIcon className="mr-3" size={20} />
                        {folder.name}
                    </button>

                </div>
                <div className="col-span-3 text-gray-400">Folder</div>
                <div className="col-span-3 text-gray-400">--</div>
            </div>
        </li>
    )
}