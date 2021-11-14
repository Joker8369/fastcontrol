class ListsController < ApplicationController
  before_action :find, only: %i[edit show update destroy]
  def index
    @lists = List.all
  end

  def edit
  end

  def new
    @list = List.new
  end

  def create
    @list = List.create(list_params)
    if @list.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @product_list = @list.products
  end

  def update
    @list.update(list_params)
    redirect_to root_path
  end

  def destroy
    @list.delete
    redirect_to root_path
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end

  def find
    @list = List.find(params[:id])
  end
end
