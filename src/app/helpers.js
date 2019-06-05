export const getRankingForScore = score => {
  if (score < 20) return 'Magikarp'
  if (score < 50) return 'Caterpie'
  if (score < 80) return 'Rattata'
  if (score < 120) return 'Voltorb'
  if (score < 170) return 'Poliwhirl'
  if (score < 220) return 'Venomoth'
  if (score < 300) return 'Dragonite'
  if (score < 500) return 'Zapdos'
  if (score < 1000) return 'Mewtwo'
  else return 'Mew'
}
