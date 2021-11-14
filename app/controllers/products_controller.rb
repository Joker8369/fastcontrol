class ProductsController < ApplicationController
   before_action :find, only: %i[edit show update destroy]
  def index
    @products = Product.all
  end

  def edit
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.create(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  def update
    @product.update(product_params)
    redirect_to root_path
  end

  def destroy
    @product.delete
    redirect_to root_path
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :list_id)
  end

  def find
    @product = Product.find(params[:id])
  end
end
