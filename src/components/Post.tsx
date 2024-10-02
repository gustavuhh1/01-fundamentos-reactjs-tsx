import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment'
import style from './Post.module.css'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { pt } from 'date-fns/locale';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType
}

export function Post({post} :PostProps) {
    const [comments, setComments] = useState([
        "Post muito bacana, heim?!"
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        
        locale: pt
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: pt, 
        addSuffix: true,

    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()


        setComments([...comments, newCommentText]);  
        
        setNewCommentText("");
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
        
        
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
        
    }

    function deleteComment(commentTOdelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentTOdelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={post.author.avatarUrl}/>
                 
                    <div className={style.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {

                        return (<p key={line.content}>{line.content}</p>)
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }})
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                    type='submit' 
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
                
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return (<Comment 
                        key={comment} 
                        content={comment} 
                        OnDeleteComment={deleteComment}
                    />
                    )   
                })}
            </div>
        </article>
    )
}