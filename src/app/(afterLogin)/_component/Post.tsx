import style from './post.module.css'
import Link from "next/link"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ActionButton from "@/app/(afterLogin)/_component/ActionButtons"

dayjs.locale('ko')
dayjs.extend(relativeTime)

export default function Post() {
    const targetr = {
        User: {
            id: 'elonmusk',
            nickname: 'Elon Musk',
            image: '/yRsRRjGO.jpg'
        },
        content: '클론코딩 라이브로 하니 너무 힘들어요 ㅜㅜ',
        createdAt: new Date(),
        Images: []
    }

    return (
        <article className={style.post}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${targetr.User.id}`} className={style.postUserImage}>
                        <img src={targetr.User.image} alt={targetr.User.nickname}/>
                        <div className={style.postShade}/>
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`${targetr.User.id}`}>
                            <span className={style.postUserName}>{targetr.User.nickname}</span>
                            &nbsp
                            <span className={style.postUserId}>@{targetr.User.id}</span>
                            &nbsp
                            .
                            &nbsp
                        </Link>
                        <span className={style.postDate}>{dayjs(targetr.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{targetr.content}</div>
                    <div className={style.postImageSection}>

                    </div>
                    <ActionButton />
                </div>
            </div>
        </article>
    )
}