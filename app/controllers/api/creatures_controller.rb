class Api::CreaturesController < ApplicationController
    def index
        @creatures = Creature.all

        render json: @creatures
    end

    def creature
        @creature = Creature.new(creature_params)

        if @creature.save
        render json: @creature
        end
    end

    def show
        creature_id = params[:id]
    
        @creature = Creature.find_by_id(creature_id)

        render json: @creature
    end

    def update
        creature_id = params[:id]

        @creature = Creature.find_by_id(creature_id)

        @creature.update_attributes(creature_params)

        render json: @creature

    end


    private

    def creature_params
        params.require(:creature).permit(:name, :description)
    end


    def destroy
        creature_id = params[:id]

        @creature = Creature.find_by_id(creature_id)

        @creature.destroy

        render json: {
            msg: "Successfully Deleted"
        }
    
    end


end
