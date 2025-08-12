'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RsvpHandler() {
  const router = useRouter();

  useEffect(() => {
    const form = document.getElementById('rsvp-form') as HTMLFormElement | null;
    if (!form) return;

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      const fd = new FormData(form);
      const data: Record<string, any> = {};
      fd.forEach((v, k) => {
        if (k in data) data[k] = Array.isArray(data[k]) ? [...data[k], v] : [data[k], v];
        else data[k] = v;
      });

      const email = String(data.email || '').trim();
      if (!email) { alert('Please enter your email'); return; }

      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) router.push('/tickets/success');
      else alert('Submission failed — please try again.');
    };

    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, [router]);

  return null;
}
