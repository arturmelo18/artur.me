import type { ApplicationType } from "../../types/application";
import "./Application.css"

//TODO: add action
export function Application(app: ApplicationType ) {
  return (
    <div className="app-icon">
      <img src={ app.image }></img>
      <span>{ app.name }</span>
    </div>
  )
}