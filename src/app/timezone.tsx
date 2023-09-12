type Props = {
    time: Date
    amPm?: boolean
}

const time = ({ time, amPm = false }: Props) => {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const ampm = hours >= 12 ? "PM" : "AM"

  const hourString = hours.toString().padStart(2, "0")
  const minuteString = minutes.toString().padStart(2, "0")

  return (
    <div className="flex items-center justify-center space-x-1 text-3xl">
      <span>{hourString}</span>
      <span>:</span>
      <span>{minuteString}</span>
      {amPm && <span>{ampm}</span>}
      </div>
  )
}

export default time