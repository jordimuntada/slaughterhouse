class HomeController < ApplicationController
  def index
    @AnimalsSlaughtered = Array.new
    @AnimalsSlaughtered[0] = "marine animals"
    @AnimalsSlaughtered[1] = "chickens"
    @AnimalsSlaughtered[2] = "ducks"
    @AnimalsSlaughtered[3] = "pigs"
    @AnimalsSlaughtered[4] = "rabbits"
    @AnimalsSlaughtered[5] = "turkeys"
    @AnimalsSlaughtered[6] = "geese"
    @AnimalsSlaughtered[7] = "sheep"
    @AnimalsSlaughtered[8] = "goats"
    @AnimalsSlaughtered[9] = "cows and calves"
    @AnimalsSlaughtered[10] = "rodents"
    @AnimalsSlaughtered[11] = "pigeons and other birds"
    @AnimalsSlaughtered[12] = "buffaloes"
    @AnimalsSlaughtered[13] = "dogs"
    @AnimalsSlaughtered[14] = "cats"
    @AnimalsSlaughtered[15] = "horses"
    @AnimalsSlaughtered[16] = "donkeys and mules"
     @AnimalsSlaughtered[17] = "camels and other camelids"
  end
end