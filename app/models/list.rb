class List < ApplicationRecord
  has_many :product, dependent: :destroy
end
