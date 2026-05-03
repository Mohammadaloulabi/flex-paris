import { useEffect, useState } from 'react'

const TARGET = new Date('2026-05-30T23:59:59').getTime()

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)     / 1_000),
  }
}

const UNITS = [
  { key: 'days',    label: 'Jours'     },
  { key: 'hours',   label: 'Heures'    },
  { key: 'minutes', label: 'Minutes'   },
  { key: 'seconds', label: 'Secondes'  },
] as const

export default function PromoCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeLeft()
      setTimeLeft(next)
      if (!next) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Hide entirely once expired
  if (!timeLeft) return null

  return (
    <section className="promo-countdown">
      <div className="promo-countdown__inner">
        <span className="promo-countdown__badge">OFFRE SPÉCIALE</span>
        <h2 className="promo-countdown__title">
          Offre spéciale <span>-50%</span>
        </h2>
        <p className="promo-countdown__sub">
          Profitez de 50% de réduction jusqu'à la fin de l'offre
        </p>
        <p className="promo-countdown__label">L'offre se termine dans :</p>

        <div className="promo-countdown__units">
          {UNITS.map(({ key, label }) => (
            <div key={key} className="promo-countdown__unit">
              <span className="promo-countdown__value">
                {String(timeLeft[key]).padStart(2, '0')}
              </span>
              <span className="promo-countdown__unit-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
