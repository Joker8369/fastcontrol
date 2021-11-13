class AddListToProducts < ActiveRecord::Migration[6.1]
  def change
    add_reference :products, :list, null: false, foreign_key: true
  end
end
