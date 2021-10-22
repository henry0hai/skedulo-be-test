export class Performance {
  band!: string
  start!: Date;
  finish!: Date;
  priority!: number;

  isPlaying(date: Date): boolean {
    return new Date(date).getTime() >= new Date(this.start).getTime() && new Date(date).getTime() <= new Date(this.finish).getTime();
  }
}