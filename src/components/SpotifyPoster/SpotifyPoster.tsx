import { SpotifyService } from "../../services/SpotifyService"
import { useState, useEffect } from "react"
import "./SpotifyPoster.css"
import type { CurrentTrack } from "../../types/spotify"

export function SpotifyPoster() {
  const [track, setTrack] = useState<CurrentTrack | void>(undefined)

  useEffect(() => {
    const fetchTrack = async () => {
      const currentlyPlayingTrack = await SpotifyService.getCurrentlyPlayingTrack()
      setTrack(currentlyPlayingTrack)
    }

    fetchTrack()


      const interval = setInterval(fetchTrack, 120000)
      return () => clearInterval(interval)
  }, [])

  const coverUrl = track?.coverUrl ?? ""
  const trackUrl = track?.url ?? ""
  const trackName = track?.name ?? ""
  const artist = track?.artists[0] ?? ""

  //TODO: adicionar algo para deixar a última música tocada no momento caso não haja nenhuma tocando
  //TODO: melhorar responsividade quanto ao texto 

  return (
    <div className="poster">
      <a href={trackUrl}>
        <img className="cover" src={coverUrl}></img>
      </a>
      <span>{trackName} - {artist}</span>
    </div>
  )
}