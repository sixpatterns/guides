class RegistrationType < BaseObject
  # columns
  field :id, ID, null: false
  field :first_name, String, null: false
  field :last_name, String, null: false
  field :user_id, ID, null: false

  # associations
  field :user, UserType, null: false, preload: :user

  # derived fields
  field :full_name, String, null: false

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
