export function minutesElapsed(date: Date) {
    const ahora = new Date();
    const minutosTranscurridos = Math.floor(
      (ahora.getTime() - date.getTime()) / 60000
    );

    return minutosTranscurridos
};
