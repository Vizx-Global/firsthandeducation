export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`❌ Missing ${name} in .env`);
    process.exit(1);
  }
  return value;
}
