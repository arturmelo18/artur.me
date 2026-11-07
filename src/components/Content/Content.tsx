import type { ApplicationType } from "../../types/application"
import { Application } from "../App/Application"
import "./Content.css"

const apps: ApplicationType[] = [
  {
    name: "Sobre mim",
    image: "assets/me.png",
    action: ""
  },
  {
    name: "Blog",
    image: "assets/blog.png",
    action: ""
  },
  {
    name: "Portfolio",
    image: "assets/portfolio.png",
    action: ""
  },
  {
    name: "Configurações",
    image: "assets/config.png",
    action: ""
  }
]

export function Content() {
  const appsList = apps.map((app) => (
    <Application name={ app.name } image={ app.image }  action={ app.action }/>
  ))

  return (
    <div className="app-content">
      <div className="apps">{ appsList }</div>
    </div>
  )
}