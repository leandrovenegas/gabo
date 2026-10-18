import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       NEXT LIGHT STUDIOS
      </h1>
      <p className="mb-4">
        {`We don’t sell videos.
We help you create the videos that your next version would make.
We are a companion to your dreams.
We have no limits — we can produce films, documentaries, commercials, and all kinds of audiovisual content.
And we can support you in anything related to your business and how to improve its communication.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
