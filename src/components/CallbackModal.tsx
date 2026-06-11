import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { company } from '../data/site'

type CallbackModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [phone, setPhone] = useState('')
  const [topic, setTopic] = useState('')
  const [isClosing, setIsClosing] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const handleClose = useCallback(() => {
    setIsClosing(true)

    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
    }

    closeTimer.current = window.setTimeout(() => {
      setPhone('')
      setTopic('')
      setIsClosing(false)
      onClose()
    }, 180)
  }, [onClose])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.body.classList.add('dialog-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('dialog-open')
      window.removeEventListener('keydown', handleKeyDown)
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current)
      }
    }
  }, [isOpen, handleClose])

  if (!isOpen) {
    return null
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent('Заказать звонок')
    const body = encodeURIComponent(`Контактный телефон: ${phone}\nТема обращения: ${topic}`)

    window.location.href = `${company.emailHref}?subject=${subject}&body=${body}`
    handleClose()
  }

  return (
    <div
      className={`callback-modal-backdrop${isClosing ? ' is-closing' : ''}`}
      onMouseDown={handleClose}
      role="presentation"
    >
      <section className="callback-modal" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <button className="callback-modal-close" onClick={handleClose} type="button" aria-label="Закрыть окно">
          <span aria-hidden="true">×</span>
        </button>
        <div>
          <p className="eyebrow">Заказать звонок</p>
          <h2>Оставьте контакт, и мы свяжемся с вами</h2>
        </div>

        <form className="callback-form" onSubmit={handleSubmit}>
          <label>
            <span>Контактный телефон</span>
            <input
              autoFocus
              name="phone"
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+7 ___ ___-__-__"
              required
              type="tel"
              value={phone}
            />
          </label>
          <label>
            <span>Тема обращения</span>
            <textarea
              name="topic"
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Например: нужна консультация по покупке 1С"
              required
              rows={3}
              value={topic}
            />
          </label>
          <div className="callback-modal-actions">
            <button className="contact-action-button contact-action-button--call" type="submit">
              Отправить
            </button>
            <button className="contact-action-button contact-action-button--request" onClick={handleClose} type="button">
              Отменить
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
