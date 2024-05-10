import { useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

import avatar from "@/assets/Avatar.jpg";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className="mt-6 flex gap-4 ">
      <Avatar hasBorder={true} src={avatar} alt="" width={0} height={0} />
      <div className="flex-1">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex justify-between items-start">
            <div className="flex flex-col">
              <strong className="text-sm">Christian Pereira</strong>
              <time
                title="22 de Abril de 2024"
                dateTime="2024-04-22 15:00:00"
                className="text-gray-400 text-xs"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className="bg-transparent border-0 text-gray-400 hover:text-red-500 transition rounded-sm"
            >
              <FaRegTrashAlt size={20} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">{content}</p>
        </div>
        <footer className="mt-4">
          <button
            onClick={handleLikeComment}
            className="bg-transparent border-0 text-gray-400 flex items-center hover:text-green-300 transition font-bold"
          >
            <FiThumbsUp className="mr-2" />
            Aplaudir{" "}
            <span className='before:content-["\2022"] before:px-1'>
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
