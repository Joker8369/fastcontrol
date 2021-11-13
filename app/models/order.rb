class Order < ApplicationRecord
  has_many :payment
end
