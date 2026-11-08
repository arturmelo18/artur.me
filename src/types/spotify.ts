export interface CurrentTrack {
  isPlaying: boolean
  name: string
  artists: string[]
  album: string
  coverUrl: string | null
  progressMs: number
  durationMs: number
  url: string
}