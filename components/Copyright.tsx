'use client';

export function Copyright() {
  return (
    <p className="text-sm text-primary font-semibold uppercase md:px-0 px-10">
      &copy; Copyright Joanna Florence Laikin {new Date().getFullYear()}. All
      rights reserved.
    </p>
  );
}
