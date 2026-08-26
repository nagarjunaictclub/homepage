type SocialLinks = 
    {
        facebook?:any,
        linkedIn?:any,
        github?:any,
        portal?:any,
        instagram?:any
    }


export type Member = {
    id:number,
    image:any,
    name:string,
    title:string,
    socialLinks:SocialLinks
}