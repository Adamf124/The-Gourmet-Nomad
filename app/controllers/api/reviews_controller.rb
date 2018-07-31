class Api::ReviewsController < ApplicationController
  def index
    @reviews = Restaurant.find(params[:restaurant_id]).reviews
    render json: @reviews
end

def create
    @Restaurant = Restaurant.find(params[:restaurant_id])
    @review = @restaurant.reviews.create(review_params)
    render json: @review
end

def show
    @review = Restaurant.find(params[:restaurant_id]).reviews.find(params[:id]) 
    render json: @review
end

def update
    @review = Restaurant.find(params[:restaurant_id]).reviews.find(params[:id])
    @review.update!(review_params)
    render json: @review
end

def destroy
    @review = review.find(params[:id]).delete 
    @reviews = review.all
    render json: @reviews
end

private

def review_params
    params.require(:review).permit(:title, :author, :date, :comment)
end
end
