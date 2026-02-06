export default function Page() {
  return (
    <main className="wrap">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <img
          src="/android-chrome-512x512.png"
          alt="RoomPost Studio"
          style={{ width: '160px', height: '160px' }}
        />
        <div style={{
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          opacity: 0.7
        }}>
          Coming Soon
        </div>
      </div>
    </main>
  );
}