import React from "react"
import { Link } from "gatsby"
import * as FontAwesome from "react-icons/fa"
import * as Devicons from "react-icons/di"
import * as GithubOcticonsicons from "react-icons/go"

const Tag = props => {
  const { tag, path, name, color } = props

  let iconPath = []
  switch (path) {
    case "Fa":
      iconPath = FontAwesome[name]
      break
    case "Di":
      iconPath = Devicons[name]
      break
    case "Go":
      iconPath = GithubOcticonsicons[name]
      break
    default:
      break
  }

  const icon = React.createElement(iconPath)

  return (
    <div style={{ display: "inline-block" }}>
      <Link to={`/tags/${tag}/`}>
        <div style={{ color: color }} title={tag}>{icon}</div>
        {/* <div style={{ fontSize: size, color: color }}>{icon}</div> */}
      </Link>
    </div>
  )
}

export default Tag
