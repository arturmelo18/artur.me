import type { CurrentTrack } from "../types/spotify"

export class SpotifyService {
  //TODO: get the url by the localhost

  static async getCurrentlyPlayingTrack(): Promise<CurrentTrack | void> {
    try {
     const response = await fetch('http://localhost:3000/currentlyPlayingTrack', {
        method: "GET"
      })

      if (response.status === 204) {
        console.log("Nenhuma música tocando no momento.")
        return
      }

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`)
      }

      const data = await response.json()
      return data as CurrentTrack
    } catch (error) {
      console.log(`Error searching the currently playing track on the spotify: ${error}`)
    }
  }
}
