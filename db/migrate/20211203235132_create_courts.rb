class CreateCourts < ActiveRecord::Migration[6.1]
  def change
    create_table :courts do |t|
      t.string :name
      t.string :location
      t.integer :time
      t.float :rate
      t.belongs_to :team, null: false, foreign_key: true
      t.belongs_to :referee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
