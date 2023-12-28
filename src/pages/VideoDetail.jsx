import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RealatedVideos from "../components/RealatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          style={{ border: "none" }}
          title={title}
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RealatedVideos />
      </section>
    </section>
  );
}
