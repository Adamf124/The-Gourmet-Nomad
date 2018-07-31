class Api::RestaurantsController < ApplicationController
  def index
      @restaurants = City.find(params[:city_id]).restaurants
      render json: @restaurants
  end
  
  def create
      @city = City.find(params[:city_id])
      @restaurant = @city.restaurants.create(restaurant_params)
      render json: @restaurant
  end
  
  def show
      @restaurant = City.find(params[:city_id]).restaurants.find(params[:id]) 
      render json: @restaurant
  end
  
  def update
      @restaurant = City.find(params[:city_id]).restaurants.find(params[:id])
      @restaurant.update!(restaurant_params)
      render json: @restaurant
  end
  
  def destroy
      @restaurant = restaurant.find(params[:id]).delete 
      @restaurants = restaurant.all
      render json: @restaurants
  end
  
  private
  
  def restaurant_params
      params.require(:restaurant).permit(:name, :address, :phot_url, :description, :website)
  end
end

