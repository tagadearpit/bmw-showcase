import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cars } from '../data/cars.js'
import SectionHeader from './SectionHeader.jsx'

const initialForm = { name: '', email: '', phone: '', model: cars[0].name, city: '' }

export default function TestDriveForm({ preferredModel }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!preferredModel) return
    setForm((current) => ({ ...current, model: preferredModel }))
  }, [preferredModel])

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.'
    if (!form.city.trim()) nextErrors.city = 'City is required.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSubmitted(true)
    setForm(initialForm)
  }

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  return (
    <section id="test-drive" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Demo request"
          title="Premium forms should be honest and usable."
          description="This is a frontend-only demo form. It validates locally and does not send or store personal data. Connect it to a backend or CRM before collecting real leads."
        />

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-2xl md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={update('name')} placeholder="Arpit Tagade" />
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={update('email')} placeholder="arpit@example.com" />
            <Field label="Phone" name="phone" value={form.phone} error={errors.phone} onChange={update('phone')} placeholder="+91 98765 43210" />
            <Field label="City" name="city" value={form.city} error={errors.city} onChange={update('city')} placeholder="Nagpur" />
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-zinc-300">Preferred model</span>
              <select
                value={form.model}
                onChange={update('model')}
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
              >
                {cars.map((car) => (
                  <option key={car.id} value={car.name} className="bg-black">
                    {car.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {submitted && (
            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
              Demo request captured locally. Connect this form to a backend, email API, or CRM for real submissions.
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-zinc-500">No backend is connected in this portfolio version. Do not use this form for production lead capture until server-side handling, rate limiting, and consent storage are implemented.</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Validate Demo Form
              <Send size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder }) {
  const errorId = `${name}-error`
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-zinc-300">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
      />
      {error && <span id={errorId} className="mt-2 block text-sm text-red-300">{error}</span>}
    </label>
  )
}
