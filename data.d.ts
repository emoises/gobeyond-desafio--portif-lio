interface DataProps {
        "owner": string
        "version": string
        "disciplines": DisciplinesProps[]
}

interface DisciplinesProps{
    "title": string,
    // "icon":  StaticImageData,
    "posts": PostProps[]
}
interface PostProps{
    "title": string,
    "imgUrl": string,
    "link": string
}
